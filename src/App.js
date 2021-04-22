function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative bgWhite py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <p className="text-xl font-semibold my-2">Key Root: E</p>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <p>Mode: Major Diatonic</p>
          </div>
          <div className="border-t-2" />
          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Scale</p>
              <div className="flex space-x-2">E (I)</div>
              <div className="flex space-x-2">F# (II)</div>
              <div className="flex space-x-2">G# (III)</div>
              <div className="flex space-x-2">A (IV)</div>
              <div className="flex space-x-2">B (V)</div>
              <div className="flex space-x-2">C# (VI)</div>
              <div className="flex space-x-2">D# (VII)</div>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Relation</p>
              <p className="text-base text-gray-400 font-semibold">Tonic</p>
              <p className="text-base text-gray-400 font-semibold">
                Supertonic
              </p>
              <p className="text-base text-gray-400 font-semibold">Mediant</p>
              <p className="text-base text-gray-400 font-semibold">
                Subdominant
              </p>
              <p className="text-base text-gray-400 font-semibold">Dominant</p>
              <p className="text-base text-gray-400 font-semibold">
                Submediant
              </p>
              <p className="text-base text-gray-400 font-semibold">Subtonic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div classNameName="App">
      Key Root: E
      Mode: Diatonic Major

      Notes:
      E (I) Tonic
      F# (II) Supertonic
      G# (III) Mediant
      A (IV) Subdominant
      B (V) Dominant
      C# (VI) Submediant
      D# (VII) SubTonic

      Chords:
      E maj (I)
      F# min (ii)
      G# min (iii)
      A maj (IV)
      B maj (V)
      C# min (vi)
      D# dim (viiº)

    </div> */
}
