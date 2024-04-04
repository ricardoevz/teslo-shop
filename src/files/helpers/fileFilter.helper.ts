export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('File is empty'), false);

  const fileExptension = file.mimetype.split('/')[1];
  const validExptension = ['jpg', 'jpeg', 'png', 'gif'];

  if (!validExptension.includes(fileExptension)) return callback(null, false);

  callback(null, true);
};
