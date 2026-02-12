
export const Dashboard = () => {

  const stats = [
    { label: 'Total Employees', value: '150', icon: '👥' },
    { label: 'On Leave', value: '12', icon: '🚫' },
    { label: 'Present Today', value: '138', icon: '✅' },
    { label: 'Departments', value: '8', icon: '🏢' },
  ];

  return (
    <section className="p-6 bg-gray-100 min-h-screen">

      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <span className="text-4xl">{stat.icon}</span>

            <p className="text-gray-500 mt-3">{stat.label}</p>

            <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

    </section>
  );
};
