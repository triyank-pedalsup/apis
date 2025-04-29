// import prisma from "../../utils/prisma.ts";

// import { Types } from "mongoose";

// export const createUser = async ({ name, email, phoneNo, password }: CreateUserInput) => {
//   const user = new User({ name, email, phoneNo, password });
//   const savedUser = await user.save();
//   return savedUser;
// };

// export const createUser = async({name:String, email:String, phoneNo:String,})

// export const checkUser = async (email: string) => {
//   const user = await User.findOne({ email });
//   return user;
// };

// export const getAllData = async () => {
//   const users = await User.find();
//   return users;
// };

// export const checkProfile = async (userId: string | Types.ObjectId) => {
//   const user = await User.findById(userId);
//   return user;
// };

// export const deleteUser = async (id: string) => {
//   const user = await User.findByIdAndDelete(id);
//   if (!user) {
//     throw new Error("User not found");
//   }
//   return user;
// };

// export const updateUser = async (id: string, data: Partial<CreateUserInput>) => {
//   const user = await User.findByIdAndUpdate(id, data, { new: true });
//   if (!user) {
//     throw new Error("User not found");
//   }
//   return user;
// };


import prisma from "../../utils/prisma";
import { IUser } from "./user.model";

export const createUser = async (data: IUser) => {
  const userCount = await prisma.user.count();

  if (userCount === 0) {
    await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;
  }

  return await prisma.user.create({ data });
};

export const getAllData = async () => {
  return await prisma.user.findMany();
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.deleteMany({
    where: { id }
  });

  const remainingUsers = await prisma.user.findMany();

  if (remainingUsers.length === 0) {
    await prisma.$executeRaw`ALTER SEQUENCE "user_id_seq" RESTART WITH 1`;
  }
  return user;

};

export const updateUser = async (id: number, data: IUser) => {
  const user = await prisma.user.updateMany({
    where: { id },
    data
  });
  return user;
};
