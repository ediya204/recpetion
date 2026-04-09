import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const FiderePayReceipt = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-12 font-sans text-slate-900 flex justify-center">
      {/* A4 aspect ratio container: 210mm x 297mm -> approx 1:1.414 */}
      <div className="w-full max-w-[210mm] aspect-[1/1.414] bg-white shadow-xl shadow-blue-100 border border-blue-100 rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0078D4] text-white p-8 flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Fidere PAY</h1>
            <p className="text-blue-100 text-sm mt-1">International Remittance Advice</p>
          </div>
        </div>

        <div className="flex-grow flex flex-col">
          {/* Status */}
          <div className="px-8 py-6 border-b border-blue-50 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[#0078D4] font-semibold">
              <CheckCircle2 className="w-6 h-6" />
              <span>Transaction Successful</span>
            </div>
            <div className="text-right text-sm text-slate-500">
              <p>Ref: <span className="font-mono text-slate-900">UR202604082007420152220139</span></p>
            </div>
          </div>

          {/* Amount */}
          <div className="px-8 py-10 bg-blue-50/50 border-b border-blue-50">
            <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Remittance Amount</p>
            <p className="text-5xl font-bold mt-2 text-slate-900">$ 189,075.00</p>
          </div>

          {/* Beneficiary Information */}
          <div className="px-8 py-8 border-b border-blue-50">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Beneficiary Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <p className="text-sm text-slate-500">Beneficiary Name</p>
                <p className="font-semibold mt-1">ZHANGYIN WANG</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Account Number</p>
                <p className="font-semibold mt-1 font-mono">01278920219562</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Beneficiary Bank</p>
                <p className="font-semibold mt-1">BANK OF CHINA (HONG KONG) LIMITED</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">SWIFT Code</p>
                <p className="font-semibold mt-1 font-mono">BKCHHKHH</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-slate-500">Bank Address</p>
                <p className="font-semibold mt-1">BANK OF CHINA TOWER FLOOR 14 1 GARDEN ROAD HONG KONG HONG KONG HONG KONG</p>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="px-8 py-8 flex-grow">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Transaction Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <p className="text-sm text-slate-500">Amount</p>
                <p className="font-semibold mt-1">189075 USD</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Method</p>
                <p className="font-semibold mt-1">SWIFT Transfer</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Transaction Time</p>
                <p className="font-semibold mt-1 font-mono text-sm">2026-04-08 20:07:43 GMT+08:00</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Purpose</p>
                <p className="font-semibold mt-1">Other</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
