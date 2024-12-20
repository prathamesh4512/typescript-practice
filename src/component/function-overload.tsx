import { ReactNode } from "react";

interface CommonProps {
  children?: ReactNode;
  miscProps?: any;
}

type NoTruncateProps = CommonProps & { truncate?: false };

type TruncateProps = CommonProps & { truncate: true; expanded?: boolean };

// Function overloads to accept both prop types NoTruncateProps & TruncateProps
function Text(props: NoTruncateProps): React.JSX.Element;
function Text(props: TruncateProps): React.JSX.Element;
function Text(props: CommonProps & { truncate?: boolean; expanded?: boolean }) {
  const { children, truncate, expanded, ...otherProps } = props;
  const classNames = truncate ? ".truncate" : "";
  return (
    <div className={classNames} aria-expanded={!!expanded} {...otherProps}>
      {children}
    </div>
  );
}


const App = () => (
    <>
      {/* these all typecheck */}
      <Text>not truncated</Text>
      <Text truncate>truncated</Text>
      <Text truncate expanded>
        truncate-able but expanded
      </Text>
      {/* TS error: Property 'truncate' is missing in type '{ children: string; expanded: true; }' but required in type '{ truncate: true; expanded?: boolean | undefined; }'. */}
      <Text expanded>truncate-able but expanded</Text>
    </>
  );