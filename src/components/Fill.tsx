interface FillProps {
    label: string;
    id: string;
    name: string;
    type: string;
    required: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Fill( { label, id, name, type, required, className, onChange }: FillProps) {
    return (
        <>
            <div>
              <label htmlFor={id} className="block text-sm/6 font-medium text-white">
                {label}
              </label>
              <div className="mt-2">
                <input
                  id={id}
                  name={name}
                  type={type}
                  required= {required}
                  autoComplete={name}
                  className={className}
                  onChange={onChange}
                />
              </div>
            </div>
        </>
    )
} 

export default Fill;