import axios from 'axios';

export const getErrorMessage = (error: any): string => {           
    if (axios.isAxiosError(error))  {
        return error.response?.data?.title ?? error.message;
      } else {
        if (error instanceof Error)
            return error.message;
        else
            return "Unknown error"
    }
}