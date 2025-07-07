import React, { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useAtom } from "jotai";
import { customerNameAtom } from "../../jotai/CustomersAtoms";
function QueueTable() {
  const [customerData, setCustomerData] = useAtom(customerNameAtom);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Customers</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>No of Pax</th>
          </tr>
        </thead>
        {customerData
          ? customerData.map((x) => (
              <tbody key={x._id}>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div>
                          <FaRegUserCircle className="w-10 h-10" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{x.customerName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {x.customerEmail}
                    </span>
                  </td>
                  <td>{x.customerNumber}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {x.customerStrength}
                    </button>
                  </th>
                </tr>
              </tbody>
            ))
          : null}
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Customers</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>No of Pax</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default QueueTable;
