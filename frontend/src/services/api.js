import axios from "axios";

export const getPaymentsTotal = () => axios.get("/api/payments/total");
export const getPaymentsChange = () => axios.get("/api/payments/percentage-change");

export const getInvoicesCount = () => axios.get("/api/invoices/count");
export const getInvoicesChange = () => axios.get("/api/invoices/percentage-change");
