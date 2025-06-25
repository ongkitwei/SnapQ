"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import LogoAndText from "@/components/LogoAndText";
import axios from "axios";

function CustomerPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [customerform, setCustomerform] = useState({
    customerName: "",
    customerNumber: "",
    customerEmail: "",
    customerStrength: "",
    projectId: "",
  });

  async function addCustomer() {
    try {
      const response = await axios.post("/api/customer", {
        customerName: customerform.customerName,
        customerNumber: customerform.customerNumber,
        customerEmail: customerform.customerEmail,
        customerStrength: customerform.customerStrength,
        projectId: id,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setCustomerform((x) => ({
        customerName: "",
        customerNumber: "",
        customerEmail: "",
        customerStrength: "",
        projectId: "",
      }));
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center h-[700px] bg-white/50 shadow-2xl rounded-2xl">
        <LogoAndText />
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold pb-12 pt-12">
          Enter details to get Queue Number
        </h2>
        <div className="w-full flex flex-col justify-center items-center">
          {/* User's Name */}

          <fieldset className="fieldset customer-form">
            <legend className="fieldset-legend">What is your name?</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here"
              value={customerform.customerName}
              onChange={(e) =>
                setCustomerform((x) => ({ ...x, customerName: e.target.value }))
              }
            />
            <p className="label">Optional</p>
          </fieldset>

          {/* User's No Of Customers */}
          <input
            type="number"
            className="input validator mt-2.5 customer-form"
            required
            placeholder="Number of people"
            min="1"
            max="10"
            title="Must be between be 1 to 10"
            value={customerform.customerStrength}
            onChange={(e) =>
              setCustomerform((x) => ({
                ...x,
                customerStrength: e.target.value,
              }))
            }
          />
          <p className="validator-hint">Must be between be 1 to 10</p>

          {/* User's Email */}
          <label className="input validator customer-form">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              value={customerform.customerEmail}
              onChange={(e) =>
                setCustomerform((x) => ({
                  ...x,
                  customerEmail: e.target.value,
                }))
              }
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          {/* User's Phone Number */}
          <label className="input validator mt-7 customer-form">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path
                  d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <input
              type="tel"
              className="tabular-nums"
              required
              placeholder="Phone"
              pattern="[0-9]*"
              minLength="8"
              maxLength="11"
              title="Must be 10 digits"
              value={customerform.customerNumber}
              onChange={(e) =>
                setCustomerform((x) => ({
                  ...x,
                  customerNumber: e.target.value,
                }))
              }
            />
          </label>
          <p className="validator-hint">Must be 10 digits</p>
          <button className="btn btn-info px-32" onClick={addCustomer}>
            Get Queue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
