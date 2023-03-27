export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium mb-1 text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
