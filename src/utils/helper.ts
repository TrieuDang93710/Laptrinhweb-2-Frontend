export function handleBlurChecking(field: string, value: string, setValue: (field: string, val: string) => void) {
  if (!value.trim()) {
    setValue(field, 'This field cannot be left blank.');
  } else {
    setValue(field, '');
    console.log('Input submitted:', value);
  }
}
