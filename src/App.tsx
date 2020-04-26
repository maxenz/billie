import React from 'react';
import NavigationBar from './components/navigationBar';
import CustomersView from './views/customers';
import Footer from './components/footer';

const App: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <NavigationBar />
            <CustomersView />
            <Footer />
        </div>
    );
};

export default App;
