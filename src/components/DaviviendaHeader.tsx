
import React, { useState } from 'react';
import { Users, Building2, ChevronDown, ShoppingBag, CreditCard, Home, DollarSign, Shield, Zap, Users2, TrendingUp, Lock, Smartphone } from 'lucide-react';
const DaviviendaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-davivienda-red text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between py-2 gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" title="Volver a Home personas" className="block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-davivienda-red font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold tracking-wide">DAVIVIENDA</span>
              </div>
            </a>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-davivienda-red-dark transition-colors bg-white/10">
                <Users className="w-4 h-4" />
                <span className="font-medium">PERSONAS</span>
              </a>
              <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-davivienda-red-dark transition-colors">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">EMPRESAS</span>
              </a>
            </nav>

            {/* Help Links */}
            <div className="hidden lg:block text-xs">
              <div className="text-right space-y-1">
                <div>▶ ¿Quiénes somos?</div>
                <div>▶ Información para inversionistas</div>
                <div>▶ Información adicional</div>
              </div>
            </div>

            {/* Login Button */}
            <a href="/login" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>INGRESO<br />CLIENTES</span>
            </a>
          </div>
        </div>

        {/* Aquí Puedo Section */}
        <div className="bg-gray-100 text-gray-800 mt-2 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-3">
            {/* Aquí Puedo Button */}
            <div className="flex-shrink-0">
              <button onClick={toggleMenu} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <span className="font-medium">Aquí puedo</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Quick Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-2 text-sm text-davivienda-red hover:text-davivienda-red-dark transition-colors">
                <ShoppingBag className="w-4 h-4" />
                <span>Abrir Productos en línea</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-sm text-davivienda-red hover:text-davivienda-red-dark transition-colors">
                <CreditCard className="w-4 h-4" />
                <span>Pagos en línea y PSE</span>
              </a>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && <div className="bg-white border-t border-gray-200 p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Construir mi futuro */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <Home className="w-5 h-5" />
                    <span>Construir mi futuro</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Vivienda</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Vehículo</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Inversiones</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Pensión</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Educación</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Ahorros</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Mi comercio</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Vender con código QR</a></li>
                  </ul>
                </div>

                {/* Manejar mi dinero */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <DollarSign className="w-5 h-5" />
                    <span>Manejar mi dinero</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Portafolio Banca Personal</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Cuentas Transaccionales</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Planificación de Impuestos</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Tarjetas Débito</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Giros Internacionales</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Multitransferencias</a></li>
                  </ul>
                </div>

                {/* Alcanzar lo que quiero */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <TrendingUp className="w-5 h-5" />
                    <span>Alcanzar lo que quiero</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Créditos de Libre Inversión</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Crédito Descontado de Nómina</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Crédito Compra de Cartera</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Crédito Zuora</a></li>
                  </ul>
                </div>

                {/* Comprar lo que deseo */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <CreditCard className="w-5 h-5" />
                    <span>Comprar lo que deseo</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Tarjeta de Crédito</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Mundo Diners</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Tarjetas Prepago y Ecard</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Davipuntos</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Asistencias y Beneficios</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Compras Virtuales</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Compras Davivienda</a></li>
                  </ul>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {/* Respaldar a mi familia */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <Users2 className="w-5 h-5" />
                    <span>Respaldar a mi familia</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Portafolio Familia</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Tarjetas Amparadas</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Cuenta Niños</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Tarjeta Mujer</a></li>
                  </ul>
                </div>

                {/* Administrar mis inversiones */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <TrendingUp className="w-5 h-5" />
                    <span>Administrar mis inversiones</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Davivienda Panamá</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Davivienda Miami</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Davivienda Corredores</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Corredores Asociados Panamá</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Davivienda Advisors</a></li>
                  </ul>
                </div>

                {/* Proteger mi patrimonio */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <Shield className="w-5 h-5" />
                    <span>Proteger mi patrimonio</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Seguros para Familia</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Seguros para Bienes</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Seguros para Casa</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Seguros para Carro</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Asistencias</a></li>
                  </ul>
                </div>

                {/* Pagar fácilmente */}
                <div>
                  <h5 className="flex items-center space-x-2 text-davivienda-red font-semibold mb-3">
                    <Zap className="w-5 h-5" />
                    <span>Pagar fácilmente</span>
                  </h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Mis Pagos Automáticos</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Pagos en Línea y PSE</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Servicios de Información y Pagos</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Transferencias Automáticas</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Comprar con Código QR</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Apple Pay</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-davivienda-red transition-colors">▶ Google Pay</a></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Links */}
              <div className="flex flex-wrap justify-center gap-6 mt-6 pt-4 border-t border-gray-200">
                <a href="#" className="flex items-center space-x-2 text-sm text-davivienda-red hover:text-davivienda-red-dark transition-colors">
                  <Smartphone className="w-4 h-4" />
                  <span>Conocer DaviPlata</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-sm text-davivienda-red hover:text-davivienda-red-dark transition-colors">
                  <span className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-xs">$</span>
                  <span>Educación Financiera</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-sm text-davivienda-red hover:text-davivienda-red-dark transition-colors">
                  <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">✈</span>
                  <span>Asesorarme si vivo o viajo al exterior</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-sm text-davivienda-red hover:text-davivienda-red-dark transition-colors">
                  <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">$</span>
                  <span>Defensor del consumidor financiero</span>
                </a>
              </div>
            </div>}
        </div>
      </div>
    </header>;
};
export default DaviviendaHeader;
