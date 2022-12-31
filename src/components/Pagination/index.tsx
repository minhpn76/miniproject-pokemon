const Pagination = () => {
  return (
    <div className="flex gap-4 justify-center pt-5 pb-4">
      <button className="bg-amber-500 py-2 px-4 rounded bg-[#283543] text-[#626C76] cursor-not-allowed" disabled={false}>Trước</button>
      <button className="bg-amber-500 py-2 px-4 rounded">Sau</button>
    </div>
  )
}

export default Pagination