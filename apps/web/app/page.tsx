import prisma from "@lifeorb/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return <>{JSON.stringify(users)}</>;
}
