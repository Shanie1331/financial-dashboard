import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface User {
  name: string;
  email: string;
  username: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

interface EditProfileFormProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ user, setUser }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    dateOfBirth: Yup.string().required('Date of Birth is required'),
    presentAddress: Yup.string().required('Present Address is required'),
    permanentAddress: Yup.string().required('Permanent Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        setValue(key as keyof User, user[key as keyof User]);
      });
    }
  }, [user, setValue]);

  const onSubmit = (data: User) => {
    setUser(data);
    alert("Data has saved")
  };

  return (
    <div className="p-6 bg-white rounded-3xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 sm:space-y-4 md:flex-row md:space-x-8 md:space-y-0"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="relative mb-6 sm:mb-0">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-cartoon-avatar-of-a-man-in-a-jacket-image_2898443.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 flex-1 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-500">Your Name</label>
              <input
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Charlene Reed"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">User Name</label>
              <input
                type="text"
                {...register('username')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Charlene Reed"
              />
              <p className="text-red-500 text-sm">{errors.username?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="charlenereed@gmail.com"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Password</label>
              <input
                type="password"
                {...register('password')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="**********"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Date of Birth</label>
              <input
                type="date"
                {...register('dateOfBirth')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="25 January 1990"
              />
              <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Present Address</label>
              <input
                type="text"
                {...register('presentAddress')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="San Jose, California, USA"
              />
              <p className="text-red-500 text-sm">{errors.presentAddress?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Permanent Address</label>
              <input
                type="text"
                {...register('permanentAddress')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="San Jose, California, USA"
              />
              <p className="text-red-500 text-sm">{errors.permanentAddress?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">City</label>
              <input
                type="text"
                {...register('city')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="San Jose"
              />
              <p className="text-red-500 text-sm">{errors.city?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Postal Code</label>
              <input
                type="text"
                {...register('postalCode')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="45962"
              />
              <p className="text-red-500 text-sm">{errors.postalCode?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Country</label>
              <input
                type="text"
                {...register('country')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="USA"
              />
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end mt-10">
          <button
            type="submit"
            className="bg-black text-white py-2 px-8 rounded-md hover:bg-gray-800 transition mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
