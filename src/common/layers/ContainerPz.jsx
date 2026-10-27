
const ContainerPz = ({className = "", children}) => {
  return (
    <div className={`max-w-7xl mx-auto px-1.5 ${className}`}>
      {children}
    </div>
  )
}

export default ContainerPz;