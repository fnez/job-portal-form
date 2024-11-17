import { ReactNode } from "react";

type ProfileFormsWrapperProps = {
  title: string;
  children: ReactNode;
};

export const ProfileFormsWrapper = ({
  title,
  children,
}: ProfileFormsWrapperProps) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 480px)",
        }}
      >
        {children}
      </div>
    </>
  );
};
