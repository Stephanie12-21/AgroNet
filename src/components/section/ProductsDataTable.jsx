"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Pencil,
  Trash2,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Sample data for purchased products
const data = [
  {
    id: "1",
    name: "Tomates Bio",
    category: "Légumes",
    quantity: 250,
    unit: "kg",
    unitPrice: 2.5,
    totalPrice: 625,
    supplier: "Ferme Durand",
    purchaseDate: "2023-06-15",
    deliveryDate: "2023-06-17",
    paymentStatus: "payé",
  },
  {
    id: "2",
    name: "Pommes Gala",
    category: "Fruits",
    quantity: 500,
    unit: "kg",
    unitPrice: 1.8,
    totalPrice: 900,
    supplier: "Vergers Martin",
    purchaseDate: "2023-07-20",
    deliveryDate: "2023-07-22",
    paymentStatus: "payé",
  },
  {
    id: "3",
    name: "Carottes",
    category: "Légumes",
    quantity: 150,
    unit: "kg",
    unitPrice: 1.2,
    totalPrice: 180,
    supplier: "Ferme Durand",
    purchaseDate: "2023-06-10",
    deliveryDate: "2023-06-12",
    paymentStatus: "payé",
  },
  {
    id: "4",
    name: "Blé",
    category: "Céréales",
    quantity: 2000,
    unit: "kg",
    unitPrice: 0.4,
    totalPrice: 800,
    supplier: "Coopérative Agricole",
    purchaseDate: "2023-05-30",
    deliveryDate: "2023-06-05",
    paymentStatus: "payé",
  },
  {
    id: "5",
    name: "Fraises",
    category: "Fruits",
    quantity: 100,
    unit: "kg",
    unitPrice: 4.5,
    totalPrice: 450,
    supplier: "Vergers Martin",
    purchaseDate: "2023-06-05",
    deliveryDate: "2023-06-06",
    paymentStatus: "en attente",
  },
  {
    id: "6",
    name: "Lait",
    category: "Produits laitiers",
    quantity: 500,
    unit: "l",
    unitPrice: 0.8,
    totalPrice: 400,
    supplier: "Laiterie Dupont",
    purchaseDate: "2023-07-01",
    deliveryDate: "2023-07-02",
    paymentStatus: "payé",
  },
  {
    id: "7",
    name: "Poulets",
    category: "Viandes",
    quantity: 50,
    unit: "unité",
    unitPrice: 8.5,
    totalPrice: 425,
    supplier: "Ferme Avicole",
    purchaseDate: "2023-07-10",
    deliveryDate: "2023-07-11",
    paymentStatus: "en attente",
  },
];

// Payment status badge component
const PaymentStatusBadge = ({ status }) => {
  const statusConfig = {
    payé: { label: "Payé", variant: "success" },
    "en attente": { label: "En attente", variant: "warning" },
    annulé: { label: "Annulé", variant: "destructive" },
  };

  const config = statusConfig[status];

  return <Badge variant={config.variant}>{config.label}</Badge>;
};

// Table columns definition
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Produit
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "supplier",
    header: "Fournisseur",
    cell: ({ row }) => <div>{row.getValue("supplier")}</div>,
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantité
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="">
        {row.getValue("quantity")} {row.original.unit}
      </div>
    ),
  },
  {
    accessorKey: "unitPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prix unitaire
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("unitPrice"));
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "purchaseDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date d'achat
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("purchaseDate"));
      return <div>{date.toLocaleDateString("fr-FR")}</div>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Statut",
    cell: ({ row }) => (
      <PaymentStatusBadge status={row.getValue("paymentStatus")} />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Ouvrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copier l'ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={`/produits/${product.id}`}
                className="flex items-center w-full"
              >
                <FileText className="mr-2 h-4 w-4" />
                Voir la facture
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/produits/${product.id}/modifier`}
                className="flex items-center w-full"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Modifier
              </Link>
            </DropdownMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <div className="flex items-center text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Supprimer
                  </div>
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Êtes-vous sûr?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Cette action ne peut pas être annulée. Cela supprimera
                    définitivement l'achat de "{product.name}" de votre
                    historique.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive">
                    Supprimer
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function ProductsDataTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [supplierFilter, setSupplierFilter] = useState("all");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // Get unique suppliers for filter
  const suppliers = [
    "all",
    ...new Set(data.map((product) => product.supplier)),
  ];

  // Handle supplier filter change
  const handleSupplierChange = (value) => {
    setSupplierFilter(value);
    if (value === "all") {
      table.getColumn("supplier")?.setFilterValue("");
    } else {
      table.getColumn("supplier")?.setFilterValue(value);
    }
  };

  // Calculate total amount of selected rows or all rows if none selected
  const calculateTotal = () => {
    const selectedRows = table.getFilteredSelectedRowModel().rows;
    const rows =
      selectedRows.length > 0 ? selectedRows : table.getFilteredRowModel().rows;

    const total = rows.reduce((sum, row) => {
      return sum + row.original.totalPrice;
    }, 0);

    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(total);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between py-4">
        <Input
          placeholder="Rechercher un produit..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex gap-2">
          <Select value={supplierFilter} onValueChange={handleSupplierChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Fournisseur" />
            </SelectTrigger>
            <SelectContent>
              {suppliers.map((supplier) => (
                <SelectItem key={supplier} value={supplier}>
                  {supplier === "all" ? "Tous les fournisseurs" : supplier}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Colonnes <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuItem
                      key={column.id}
                      className="capitalize"
                      onSelect={(e) => e.preventDefault()}
                    >
                      <Checkbox
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                        className="mr-2"
                      />
                      {column.id === "imageUrl"
                        ? "Image"
                        : column.id === "name"
                        ? "Produit"
                        : column.id === "purchaseDate"
                        ? "Date d'achat"
                        : column.id === "unitPrice"
                        ? "Prix unitaire"
                        : column.id === "totalPrice"
                        ? "Total"
                        : column.id === "paymentStatus"
                        ? "Statut"
                        : column.id}
                    </DropdownMenuItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 ">
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length > 0 ? (
            <span>
              {table.getFilteredSelectedRowModel().rows.length} sur{" "}
              {table.getFilteredRowModel().rows.length} ligne(s) sélectionnée(s)
              | Total: <span className="font-medium">{calculateTotal()}</span>
            </span>
          ) : (
            <span>
              Total: <span className="font-medium">{calculateTotal()}</span>
            </span>
          )}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Précédent
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}
