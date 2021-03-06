import { checkSchema } from 'express-validator';
import { YOUTUBE_URL_REGEXP } from '../regexp';

const bloggerValidationSchema = checkSchema({
  name: {
    customSanitizer: {
      options: (value: string) => value?.trim(),
    },
    isLength: {
      errorMessage: 'Name length cannot exceed 15 characters',
      options: { max: 15, min: 1 },
    },
  },
  youtubeUrl: {
    isLength: {
      errorMessage: 'The field length cannot be more than 100 characters',
      options: { max: 100 },
    },
    matches: {
      errorMessage: 'The URL you entered is not in the correct format',
      options: YOUTUBE_URL_REGEXP,
    },
  },
});

export default bloggerValidationSchema;
