import { NextResponse } from 'next/server';
import {DJANGO_API_ENDPOINT} from "@/app/config/defaults" 

export async function GET() {
  try {
    const data = {apiEndpoint: DJANGO_API_ENDPOINT}
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: 'Failed to fetch users', error: error.message },
      { status: 500 }
    );
  }
}