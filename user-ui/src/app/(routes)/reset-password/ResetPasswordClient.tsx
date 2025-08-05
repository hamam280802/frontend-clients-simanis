'use client';

import { useSearchParams } from 'next/navigation';

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  // ...render form reset password memakai `token`
  return (
    <div>
      <h1>Reset Password</h1>
      {/* contoh */}
      <p>Token: {token ?? 'Tidak ada token'}</p>
      {/* komponen/form kamu di sini */}
    </div>
  );
}
