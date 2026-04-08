import Example from "../components/ejemplos/Example7";

function AboutPage() {
  return (
    <>
      <h1>Acerca de Nosotros</h1>
      <Example  label="Nombre"/>
      <Example  label="Correo Electrónico" type="email"/>
      <Example  label="Contraseña" type="password"/>
    </>
  );
}


export default AboutPage;
