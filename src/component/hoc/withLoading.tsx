
type WithLoadingProps = {
    isLoading: boolean
}

function withLoading<P extends object>(
    WrappedComponent: React.ComponentType<P>
  ){
    const WithLoading = ({ isLoading, ...props } : WithLoadingProps & P) => {
      if (isLoading) {
        return <div>Loading...</div>;
      }
      
      return <WrappedComponent {...props as P} />;
    };
    
    return WithLoading;
  }



  const MyComponent = ({ name }: { name: string }) => (
    <div>{name}</div>
  );
  
  const MyComponentWithLoading = withLoading(MyComponent);
  
  const App: React.FC = () => (
    <MyComponentWithLoading isLoading={true} name="John Doe" />
  );