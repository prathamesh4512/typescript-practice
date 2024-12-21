type WithThemeProps = {
  theme: string;
};

function withTheme<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const WithTheme = ({ theme, ...props }: WithThemeProps & P) => (
    <div style={{ background: theme }}>
      <WrappedComponent {...(props as P)} />
    </div>
  );

  return WithTheme;
}

type MyComponentProps = {
  name: string;
};

const MyComponent = ({ name }: MyComponentProps) => <div>{name}</div>;

const MyComponentWithTheme = withTheme(MyComponent);

const App = () => <MyComponentWithTheme name="John Doe" theme="lightblue" />;
