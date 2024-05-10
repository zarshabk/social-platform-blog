export const metadata = {
  title: {
    default: "blog app",
    template: "%s | blog app",
  },
};

export default function layout({ children }) {
  return <main>{children}</main>;
}
