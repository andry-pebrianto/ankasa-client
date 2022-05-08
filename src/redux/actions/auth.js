import axios from "axios";

export const login = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data
    );

    localStorage.setItem("token", res.data.token.jwt);
    localStorage.setItem("id", res.data.token.id);

    return
  } catch (error) {
    alert(error.response.data.message +'\n'+ error.response.data.error)
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      data
    );
    return alert(
      "you success to register, now check your email to acctivate your account"
    );
  } catch (error) {
    alert(error.response.data.message +'\n'+ error.response.data.error)
  }
};
export const forgot = async (data) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/auth/forgot`,
      data
    );
    return alert(
      "you success to reset password, now check your email to reset your password"
    );
  } catch (error) {
    alert(error.response.data.message +'\n'+ error.response.data.error)
  }
};

export const reset = async (token,data) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/auth/reset/${token}`,
      data
    );
    return alert(
      "you success to reset password, now you can login"
    );
  } catch (error) {
    alert(error.response.data.message +'\n'+ error.response.data.error)
  }
};