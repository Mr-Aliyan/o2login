const OTPInput = ({ length = 4, onComplete }) => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            {Array.from({ length }, (_, InputIndex) => (
                <input
                    key={InputIndex}
                    type='text'
                    maxLength={1}
                    className={`border border-solid border-border-slate-500 focus:border-blue-600 p-5`}
                />
            ))}


        </div>
    )
}


export default OTPInput