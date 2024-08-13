const Footer = () => {
    return (
        <footer className="bg-zeus-800 text-zeus-100 py-8">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Daniela Bosing Eventos. Todos os direitos reservados.</p>
                <p>Designed by Freepik</p>
            </div>
        </footer>
    );
};

export default Footer;
