import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/context";
import { Container, LoginBox} from "./styles";
import { FormControl, Input } from "@chakra-ui/react";
import { BtnLogin } from "../../components/styles/Btn";


const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required Email"),
  senha: Yup.string().required("Required Senha")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
});

export default function Login() {
  
  const { isLogged, setIsLogged } = useContext(MyContext);
  const history = useHistory();

  
  const form = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      loginUser(values);
      history.push("/movieListing");
    },

  });

  const loginUser = (values) => {
    localStorage.setItem("login", JSON.stringify(values));
    setIsLogged(true)
    history.push("/movieListing"); 
  }

  console.log(loginUser);
  console.log(form.errors.email);


  return (
    <Container>
      <h1>BlockFlix</h1>
      <LoginBox>
      <h2>Entrar</h2>
      <form action="" onSubmit={form.handleSubmit}>
          <FormControl id="email" isInvalid={true}>
          <span className="error-message">{form.errors.email} {form.errors.senha}</span>
  
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={form.values.email}
              onChange={form.handleChange}
              style={{
                borderColor: form.errors.senha ? "tomato" : "black",
              }}
            />
          </FormControl>
          
          <div>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="*****"
              value={form.values.senha}
              onChange={form.handleChange}
              style={{
                borderColor: form.errors.senha ? "tomato" : "black",
              }}
            />
          </div>
        

          <BtnLogin type="submit">
            ENTRAR
          </BtnLogin>
      
      </form>
      </LoginBox>
    </Container>
  );
}