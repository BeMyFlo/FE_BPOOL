import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../redux/notificationSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.notification);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 p-4">
      <div
        className={`rounded-lg px-4 py-3 text-white shadow-lg ${
          type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}
      >
        <p className="text-center text-sm font-medium">{message}</p>
      </div>
    </div>
    
  );
};

export default Notification;
