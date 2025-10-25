import {useTranslations} from 'next-intl';

interface ArtPiece{
  name: string,
  fileName: string,
  status: number
}

export default function ExampleClientComponent() {
  const t = useTranslations();

  // TODO: fetch data from the backend
  const artPieces:ArtPiece[] = [
    {name: "Bandiera palestinese a Codroipo", fileName:"test", status:0},
    {name: "Porco Rosso", fileName:"test", status:2},
    {name: "Lorem Ipsum", fileName:"test", status:1},
    {name: "Dolor Sit Amet", fileName:"test", status:2},
    {name: "Consectetur", fileName:"test", status:0},
    {name: "Adipiscing Elit", fileName:"test", status:0},
  ];
  
  return (
    <div className="bg-base-100">
      <ul className="list bg-base-100 flex mx-auto items-center justify-center p-8 w-fit lg:w-6/12">
      {
        artPieces.map((artPiece)=>(
          <li key={artPiece.name} className="list-row w-full items-center justify-between">
            <div><img className="size-20 rounded-box" src={"https://hyperallergic-newspack.s3.amazonaws.com/uploads/2025/06/vancememethatwillgetmedeported.jpg"/*`https://wplace.it/templates/${artPiece.fileName}`*/}/></div>
            <p className="font-bold text-info">{artPiece.name}</p>
            <button className={"btn " + 
              (artPiece.status == 0 ? "btn-primary" :
              (artPiece.status == 1 ? "btn-warning" :
              "btn-error"))
            }>{t("inspect")}</button>
          </li>
        ))
      }
      </ul>
    </div>
  );
}
