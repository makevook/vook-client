export async function register() {
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NEXT_PUBLIC_MSW === 'enable'
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/no-unresolved
    const { mswServer } = await import('@/mock/node')
    mswServer.listen({
      onUnhandledRequest: 'bypass',
    })
  }
}
