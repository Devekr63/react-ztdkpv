function validate({email, name, password}){
  let error = {};
  if(email === null) error.email = null;
  else error.email = email;
  if(name === null) error.name = null;
  else error.name = name;
  if(password === null) error.name = null;
  else error.password = password;
  return error;
}

export default validate;