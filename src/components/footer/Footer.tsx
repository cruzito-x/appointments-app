const Footer = () => {
  return (
    <div className="mb-5 flex items-center justify-center">
      <label className="font-normal text-sm">
        &copy;
        {new Date().getFullYear()} Sanitos SV - Todos los derechos reservados.
      </label>
    </div>
  );
};

export default Footer;
