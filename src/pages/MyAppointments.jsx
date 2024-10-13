import { useState, useMemo } from 'react';

const consultationData = [
  { doctor: 'Dr. Kulkarni', specialty: 'Cardiologist', date: '04/04/2024', fees: 520, status: 'Completed', notes: 'Regular checkup' },
  { doctor: 'Dr. Batra\'s', specialty: 'Dentist', date: '04/08/2024', fees: 1800, status: 'Scheduled', notes: 'Teeth cleaning' },
  { doctor: 'Clinic Life', specialty: 'General', date: '21/08/2024', fees: 800, status: 'Cancelled', notes: 'Annual physical' },
  { doctor: 'Dr.Gupta', specialty: 'Cardiologist', date: '28/08/2024', fees: 3100, status: 'Completed', notes: 'Follow-up' },
];

const ConsultationHistory = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'ascending' });
  const [filter, setFilter] = useState('');

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  const sortedData = useMemo(() => {
    let sortableItems = [...consultationData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (sortConfig.key === 'date') {
          return sortConfig.direction === 'ascending' 
            ? formatDate(a.date) - formatDate(b.date)
            : formatDate(b.date) - formatDate(a.date);
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter(item =>
      Object.values(item).some(val =>
        val.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [sortedData, filter]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Consultation History</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search consultations..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto bg-gray-50 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              {['Doctor', 'Date', 'Fees', 'Status', 'Notes'].map((header) => (
                <th 
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-300 transition"
                  onClick={() => requestSort(header.toLowerCase())}
                >
                  {header}
                  {sortConfig.key === header.toLowerCase() && (
                    <span className="ml-1">{sortConfig.direction === 'ascending' ? '↑' : '↓'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((consultation, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{consultation.doctor}</div>
                  <div className="text-sm text-gray-500">{consultation.specialty}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {consultation.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ₹{consultation.fees.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(consultation.status)}`}>
                    {consultation.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {consultation.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Total Consultations: {filteredData.length}
      </div>
    </div>
  );
};

export default ConsultationHistory;