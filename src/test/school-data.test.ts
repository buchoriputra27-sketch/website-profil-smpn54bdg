import { describe, expect, it } from "vitest";
import { EKSKUL, LEADERS, MISSIONS, SCHOOL, SLOGAN_WORDS, STATS, VISION, filterEkskul, quickReplyAnswer, schoolKnowledge } from "@/lib/school-data";

describe("Ekskul day filter", () => {
  it("shows all 10 activities for Semua", () => {
    expect(filterEkskul("Semua")).toHaveLength(10);
  });
  it("Selasa only has Tarung Derajat", () => {
    expect(filterEkskul("Selasa").map((e) => e.name)).toEqual(["Tarung Derajat"]);
  });
  it("Rabu has Pramuka, Karawitan, Volly Ball", () => {
    expect(filterEkskul("Rabu").map((e) => e.name)).toEqual(["Pramuka", "Karawitan", "Volly Ball"]);
  });
  it("Kamis has Tari and Pajarpara", () => {
    expect(filterEkskul("Kamis").map((e) => e.name)).toEqual(["Tari", "Pajarpara"]);
  });
  it("Jumat has Marching Band, PMR, Futsal, Sepak Bola", () => {
    expect(filterEkskul("Jumat").map((e) => e.name)).toEqual(["Marching Band", "PMR", "Futsal", "Sepak Bola"]);
  });
  it("keeps the official Marching Band schedule", () => {
    expect(EKSKUL.find((e) => e.name === "Marching Band")).toMatchObject({ time: "15.00 - 17.30", place: "Lapangan Voli" });
  });
});

describe("No phone numbers anywhere", () => {
  it("school knowledge and quick replies contain no phone-like numbers", () => {
    const all = [schoolKnowledge(), ...(["Alamat", "Budaya BISA", "Jadwal Ekskul", "Jam Operasional"] as const).map(quickReplyAnswer)].join("\n");
    expect(all).not.toMatch(/(\+62|\(0\d{2,3}\)|\b0\d{2,3}[-\s]?\d{3,})/);
    expect(Object.keys(SCHOOL)).not.toContain("phone");
  });
});

describe("Leadership", () => {
  it("Kepala Sekolah (Plt.) has no photo", () => {
    const head = LEADERS.find((l) => l.role === "Kepala Sekolah");
    expect(head?.name).toBe("Hendra Prijatna, S.Pd., M.Pd.");
    expect(head?.photo).toBeUndefined();
  });
});

describe("Operating hours", () => {
  it("is Senin–Jumat 07.00–14.00 WIB", () => {
    expect(quickReplyAnswer("Jam Operasional")).toContain("07.00 – 14.00 WIB");
  });
});

describe("Official slogan, vision, mission and stats", () => {
  it("slogan is 54 BEST with its five words in order", () => {
    expect(SCHOOL.slogan).toBe("54 BEST");
    expect(SLOGAN_WORDS).toEqual(["Berdoa", "Belajar", "Berkarya", "Berkarakter", "Berhasil"]);
  });
  it("has five missions titled after the slogan words", () => {
    expect(MISSIONS.map((m) => m.title)).toEqual([...SLOGAN_WORDS]);
  });
  it("vision is the new official text", () => {
    expect(VISION.startsWith("Terwujudnya peserta didik yang beriman dan bertakwa")).toBe(true);
    expect(VISION.endsWith("untuk menghadapi tantangan global.")).toBe(true);
  });
  it("shows 33 guru and 5 tenaga kependidikan", () => {
    expect(STATS.find((s) => s.label === "Guru")?.value).toBe(33);
    expect(STATS.find((s) => s.label === "Tenaga Kependidikan")?.value).toBe(5);
  });
});
