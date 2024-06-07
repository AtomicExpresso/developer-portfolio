import { ResultsType } from "@/typeings/types";
import Link from "next/link";

export default function ProjectTitle({results}: {results: ResultsType}){
  return (
    <div className="item-project-title">
    <h1>{results.name}</h1>
    <p>{results.Lang}</p>
    <div className="item-project-btn-container">
      <Link href={results.PreviewLink}>
        <button className="btn btn-success">Live Preview</button>
      </Link>
      <Link href={results.SourceLink}>
        <button className="btn btn-primary">Source Code</button>
      </Link>
    </div>
  </div>
  )
}