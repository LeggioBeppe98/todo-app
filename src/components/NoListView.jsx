import InfoIcon from "./common-buttons/InfoIcon";

export default function NoListView() {
  return (
    <div className="vh-100 d-flex flex-column justify-center align-items-center">
      <InfoIcon className="text-muted" />
      <p className="pt-3"> Selziona un elenco</p>
    </div>
  );
}
