import AuthCloudPanel from '@/components/auth/AuthCloudPanel';

export default function AuthLayout({ children }: LayoutProps<'/login'>) {
  return (
    <main className="min-h-screen bg-[#061117] px-5 py-8 text-[#f4f0e3] sm:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="mx-auto w-full max-w-md py-8 lg:mx-0">{children}</div>
        <AuthCloudPanel />
      </div>
    </main>
  );
}
