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
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
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
    setUser(data); // Update the user state
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Username</label>
        <input
          type="text"
          {...register('username')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.username?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          {...register('password')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          {...register('dateOfBirth')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Present Address</label>
        <input
          type="text"
          {...register('presentAddress')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.presentAddress?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Permanent Address</label>
        <input
          type="text"
          {...register('permanentAddress')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.permanentAddress?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">City</label>
        <input
          type="text"
          {...register('city')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.city?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Postal Code</label>
        <input
          type="text"
          {...register('postalCode')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.postalCode?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Country</label>
        <input
          type="text"
          {...register('country')}
          className="w-full px-4 py-2 border rounded-md"
        />
        <p className="text-red-500 text-sm">{errors.country?.message}</p>
      </div>
      <div>
        <label className="block text-sm font-medium">Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Save
      </button>
    </form>
  );
};

export default EditProfileForm;
