function ArtistPage() {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/drawings")
      .then((resp) => resp.json())
      .then(data => setDrawings(data));
  }, []);

  drawingCard = drawings.map((drawing) => <DrawingCard drawing={drawing}/>);
  return (
    <>
      <h1>ArtistPage</h1>
      {drawingCard}
    </>
  );
}

export default ArtistPage;
