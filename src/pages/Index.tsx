
import DaviviendaHeader from '../components/DaviviendaHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DaviviendaHeader />
      
      {/* Main Content */}
      <main className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Bienvenido a Davivienda</h1>
            <p className="text-xl text-gray-600 mb-8">Tu banco de confianza para todas tus necesidades financieras</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-davivienda-red">Productos Digitales</h3>
                <p className="text-gray-600">Descubre nuestros productos y servicios bancarios digitales</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-davivienda-red">Banca en Línea</h3>
                <p className="text-gray-600">Accede a tu cuenta y realiza transacciones de forma segura</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-davivienda-red">Atención al Cliente</h3>
                <p className="text-gray-600">Estamos aquí para ayudarte con todas tus consultas</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
