import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { revalidatePath } from "next/cache"
  
  
  interface Icourse{
    id:number,
    name:string,
    email:string

  }
  export default async function Listcourse() {
    const course = await list()
    async function list(){
      revalidatePath("/admin/course")
      const response = await fetch ("https://server20241.vercel.app/courses");
      return response.json();
    }


    return (
      <Table>
        <TableCaption>Lista De course.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>NOME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {course.map((item:Icourse) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  