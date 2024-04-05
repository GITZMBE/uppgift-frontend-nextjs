import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-0 sm:px-4 md:px-24 py-24">
      {children}
    </main>
  )
}

export default Container;