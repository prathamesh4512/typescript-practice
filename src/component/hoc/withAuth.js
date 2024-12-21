
const withAuth = (Component) => (props) => {
  const isAuthenticated = true; //  authentication logic ;

  if (isAuthenticated) return <div>
    {/* Extra UI */}
  <Component {...props} />
  </div>
  else return <Login />;
};
