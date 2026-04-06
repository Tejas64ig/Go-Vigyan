export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: 'Validation Error', 
      details: err.message 
    });
  }
  
  if (err.code === 11000) {
    return res.status(400).json({ 
      error: 'Duplicate Key Error', 
      details: Object.keys(err.keyValue).map(key => `${key} already exists`).join(', ') 
    });
  }
  
  res.status(500).json({ 
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined 
  });
};
