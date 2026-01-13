import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../state/store' // Import your store types

export const useAppDispatch = useDispatch<AppDispatch>;