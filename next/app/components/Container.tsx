import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  )
}

export default Container;