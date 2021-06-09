export const getPagination = (page, size, title) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    const condition = title
        ? {
              title: { $regex: new RegExp(title), $options: 'i' },
          }
        : {};
    return { limit, offset, condition };
};
