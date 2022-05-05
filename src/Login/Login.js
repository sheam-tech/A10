import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, error2] =
    useSendPasswordResetEmail(auth);
  const [signInWithGoogle, user2, loading2, error3] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  if (loading || loading2) {
    return <Loading></Loading>;
  }

  if (user || user2) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("Please enter your email address.");
      return;
    }
    await sendPasswordResetEmail(email);
    toast("Password reset link sent on your email.");
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="mx-auto my-5 custom-size">
      <Card>
        <Card.Header className="bg-primary text-white fw-bold text-center">
          Login To Your Account
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            {error && (
              <p className="alert alert-danger fw-bold">{error.message}</p>
            )}
            {error2 && (
              <p className="alert alert-danger fw-bold">{error2.message}</p>
            )}
            {error3 && (
              <p className="alert alert-danger fw-bold">{error3.message}</p>
            )}
            <Button variant="primary" type="submit" className="w-25 fw-bold">
              Login
            </Button>
          </Form>
          <ToastContainer />
          <p className="my-3 fw-bold">
            Dont have account?{" "}
            <Link to="/register" className="text-decoration-none text-success">
              Create New!
            </Link>
          </p>
          <p className="my-3 fw-bold">
            Forgat password?{" "}
            <span
              onClick={handleResetPassword}
              className="text-success"
              style={{ cursor: "pointer" }}
            >
              Reset Password
            </span>
          </p>
          <div className="my-3 d-flex align-items-center justify-content-center">
            <div style={{ height: "2px" }} className="w-25 bg-success"></div>
            <p className="fw-bold text-success pt-3 px-2">Or</p>
            <div style={{ height: "2px" }} className="w-25 bg-success"></div>
          </div>
          <Button
            variant="light"
            type="button"
            className="w-100 fw-bold text-success"
            onClick={handleGoogleSignIn}
          >
            Sign In With Google
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
